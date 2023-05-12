export const jobLoader = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`jobs.json`);
    const data = await response.json();
    const filteredData = data.filter(job => job.id === id);
    return filteredData[0];
  };
  