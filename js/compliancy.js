const compliancyData = [
    { "name": "ISO 9000", "description": "Description for ISO 9000"}
];

compliancyData.forEach(item => {
  item.href = `./compliancy/${item.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '')}.html`;
});