import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [filter, setFilter] = useState('all');       // 'all' | 'unresolved'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' | 'desc'
  const [expandRow, setExpandRow] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, [filter, sortOrder]);

  const fetchRequests = async () => {
    try {
      const token  = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.get('/admin/request', config);

      let list = data;
      if (filter === 'unresolved') {
        list = list.filter(r => !r.resolved);
      }

      list.sort((a, b) => {
        const da = new Date(a.created_at);
        const db = new Date(b.created_at);
        return sortOrder === 'asc' ? da - db : db - da;
      });

      setRequests(list);
      setSelected(new Set());
    } catch (err) {
      console.error('Failed to fetch requests', err);
    }
  };

  const toggleSelect = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else            next.add(id);
    setSelected(next);
  };

  const performAction = async (action) => {
    try {
      const token  = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const ids    = Array.from(selected);

      if (action === 'delete') {
        await Promise.all(ids.map(id => axios.delete(`/admin/request/${id}`, config)));
      } else {
        const resolved = action === 'resolve';
        await Promise.all( ids.map(id => axios.put(`/admin/request/${id}`, { resolved }, config) ) );
      }

      fetchRequests();
    } catch (err) {
      console.error(`Failed to ${action} requests`, err);
    }
  };

  const clickExpandRow = (id) => {
    if (expandRow && expandRow === id) {
        setExpandRow(null)
    } else {
        setExpandRow(id);
    }
  }

  return (
    <div style={{ padding: '24px' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>
            Admin Dashboard: Requests
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Filter:
                <select value={filter} onChange={e => setFilter(e.target.value)}
                    style={{ marginLeft: '4px', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }} >
                    <option value="all">All</option>
                    <option value="unresolved">Unresolved</option>
                </select>
            </label>

            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }} >
                Sort by Date ({sortOrder})
            </button>

            <button onClick={() => {localStorage.removeItem('token'); navigate('/admin/login');}}
                    style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff',       // primary blue
                        color: '#fff'}} >
                To Login
            </button>

            <br/>

            {selected.size > 0 && (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => performAction('resolve')}
                            style={{ padding: '8px 12px', backgroundColor: '#38a169', color: '#fff', border: 'none', 
                                    borderRadius: '4px', cursor: 'pointer' }} >
                        Resolve
                    </button>
                    <button onClick={() => performAction('unresolve')}
                            style={{ padding: '8px 12px', backgroundColor: '#d69e2e', color: '#fff', border: 'none', 
                                    borderRadius: '4px', cursor: 'pointer' }} >
                        Unresolve
                    </button>
                    <button onClick={() => performAction('delete')}
                            style={{ padding: '8px 12px', backgroundColor: '#e53e3e', color: '#fff', border: 'none', 
                                    borderRadius: '4px', cursor: 'pointer' }} >
                        Delete
                    </button>
                </div>
            )}
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ backgroundColor: '#f7fafc' }}>
                    <th style={{ border: '1px solid #e2e8f0', padding: '8px' }}>
                    <input type="checkbox"
                            onChange={ e => e.target.checked ? setSelected(new Set(requests.map(r => r.id))) : setSelected(new Set()) } />
                    </th>
                    <th style={{ border: '1px solid #e2e8f0', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid #e2e8f0', padding: '8px' }}>Email</th>
                    <th style={{ border: '1px solid #e2e8f0', padding: '8px' }}>Subject</th>
                    <th style={{ border: '1px solid #e2e8f0', padding: '8px' }}>Date</th>
                    <th style={{ border: '1px solid #e2e8f0', padding: '8px' }}>Resolved</th>
                </tr>
            </thead>
            <tbody>
                {requests.map(req => (
                     <React.Fragment key={req.id}>
                        <tr onClick={() => clickExpandRow(req.id)} key={req.id} 
                            style={{ cursor: 'pointer', backgroundColor: selected.has(req.id) ? '#ebf8ff' : '' }} >
                            <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center' }}>
                                <input type="checkbox" checked={selected.has(req.id)} onChange={() => toggleSelect(req.id)} />
                            </td>
                            <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>{req.name}</td>
                            <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>{req.email}</td>
                            <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>{req.subject}</td>
                            <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>
                                {new Date(req.created_at).toLocaleString()}
                            </td>
                            <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>
                                {req.resolved ? 'Yes' : 'No'}
                            </td>
                        </tr>
                        {expandRow === req.id && (
                            <tr>
                                <td></td>
                                <td colSpan={6} style={{ padding: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f9fafb' }} >
                                    {req.service && (
                                        <p style={{ marginTop: '4px' }}>
                                        <strong>Service:</strong> {req.service}
                                        </p>
                                    )}
                                    
                                    {req.it_service && (
                                        <p style={{ marginTop: '4px' }}>
                                        <strong>IT Service:</strong> {req.it_service}
                                        </p>
                                    )}

                                    {req.compliance && (
                                        <p style={{ marginTop: '4px' }}>
                                        <strong>Compliance:</strong> {req.compliance}
                                        </p>
                                    )}

                                    {/* Message */}
                                    {req.message && (
                                        <p style={{ marginTop: 0, whiteSpace: 'pre-wrap' }}>
                                        <strong>Message:</strong><br/>
                                        {req.message}
                                        </p>
                                    )}
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    </div>
  );
}