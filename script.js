// Function to filter job listings based on selected job type
function filterJobs() {
  const filterValue = document.getElementById('jobFilter').value;
  // Get selected filter value
  const jobs = document.querySelectorAll('.job');
  // Get all job listings

  // Loop through each job and filter by type
  jobs.forEach(job => {
    const jobType = job.querySelector('p:nth-child(4)').textContent.split(":")[1].trim();
    // Extract the job type

    // Show job if it matches the filter value or if no filter is selected
    if (filterValue === "" || jobType === filterValue) {
      job.style.display = "block";
      // Display the job
    } else {
      job.style.display = "none";
      // Hide the job
    }
  });
}

// Function to simulate applying for a job
function applyJob() {
  alert('You have applied for the job!');
  // Display an alert when applying
}
