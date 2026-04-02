// BEGIN
const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) return '';
  
  let items = '';
  for (const [term, description] of definitions) {
    items += `<dt>${term}</dt><dd>${description}</dd>`;
  }
  
  return `<dl>${items}</dl>`;
};

export default buildDefinitionList;
// END
