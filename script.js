// job listings 
const jobListings = [
    {
      title: "Web Developer",
      location: "New York, USA",
      company: "ABC Company",
      type: "Full Time",
      overview: "We are looking for an experienced web developer to join our team.",
      requirements: "Minimum 3 years of experience in web development.",
      work: "Develop and maintain web applications using HTML, CSS, and JavaScript."
    },
    {
    title: "Software Engineer",
    location: "San Francisco, USA",
    company: "PQR Company",
    type: "Full Time",
    overview: "We are looking for a software engineer to join our team and help us build the next generation of software applications.",
    requirements: "Minimum 5 years of experience in software engineering, proficiency in one or more programming languages.",
    work: "Design and develop software applications, write clean and efficient code, and collaborate with cross-functional teams."
  },
  {
    title: "Data Analyst",
    location: "Tokyo, Japan",
    company: "LMN Company",
    type: "Part Time",
    overview: "We are seeking a data analyst to help us analyze and interpret complex data sets.",
    requirements: "Minimum 2 years of experience in data analysis, proficiency in SQL and Excel.",
    work: "Extract, transform, and load data, analyze and interpret data to identify patterns and trends, and communicate findings to stakeholders."
  },
  {
    title: "Web Developer",
    location: "Berlin, Germany",
    company: "QRS Company",
    type: "Full Time",
    overview: "We are looking for a talented UI/UX designer to join our team and create engaging user experiences.",
    requirements: "Minimum 3 years of experience in UI/UX design, proficiency in design tools such as Sketch, Figma, or Adobe XD.",
    work: "Create wireframes, prototypes, and high-fidelity designs, conduct user research and usability testing, and collaborate with cross-functional teams."
  },
  
    {
      title: "Graphic Designer",
      location: "London, UK",
      company: "XYZ Company",
      type: "Part Time",
      overview: "We are looking for a creative graphic designer to work on various projects.",
      requirements: "Proficiency in Adobe Photoshop and Illustrator.",
      work: "Design and create various marketing materials, such as brochures, posters, and banners."
    },
    {
      title: "Marketing Manager",
      location: "Paris, France",
      company: "123 Company",
      type: "Full Time",
      overview: "We are seeking a talented marketing manager to lead our marketing team.",
      requirements: "Minimum 5 years of experience in marketing.",
      work: "Develop and execute marketing campaigns, manage social media accounts, and analyze marketing data."
    },
  ];
  
  // country
  function getCountry(location) {
    const parts = location.split(",");
    return parts[parts.length - 1].trim();
  }
  function clearSearch() {
    document.getElementById("search-title").value = "";
    document.getElementById("search-location").value = "";
    document.getElementById("search-type").value = "";
    displayListings(jobListings);
  }
  
  // job listings display
  function displayListings(listings) {
    const container = document.getElementById("job-listings");
    container.innerHTML = "";
    for (let i = 0; i < listings.length; i++) {
      const listing = listings[i];
      const div = document.createElement("div");
      div.classList.add("job-listing");
      div.innerHTML = `
        <h2>${listing.title}</h2>
        <p>${listing.company} - ${getCountry(listing.location)}</p>
        <p>${listing.type}</p>
        <p>${listing.overview}</p>
        <p><strong>Requirements:</strong> ${listing.requirements}</p>
        <p><strong>Work:</strong> ${listing.work}</p>
      `;
      container.appendChild(div);
    }
  }
  
  // search job listings
  function searchJobs() {
    const titleInput = document.getElementById("search-title");
    const locationInput = document.getElementById("search-location");
    const typeInput = document.getElementById("search-type");
    let filteredListings = jobListings;
    if (titleInput.value !== "") {
      filteredListings = filteredListings.filter(listing => listing.title.toLowerCase().includes(titleInput.value.toLowerCase()));
    }
    if (locationInput.value !== "") {
      const country = getCountry(locationInput.value);
      filteredListings = filteredListings.filter(listing => getCountry(listing.location).toLowerCase() === country.toLowerCase());
    }
    if (typeInput.value !== "") {
      filteredListings = filteredListings.filter(listing => listing.type.toLowerCase() === typeInput.value.toLowerCase());
    }
    
  function showJobForm() {
    document.getElementById("job-form").classList.remove("hidden");
  }
  
  function hideJobForm() {
    document.getElementById("job-form").classList.add("hidden");
  }
  function addJob() {
    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;
    const company = document.getElementById("company").value;
    const type = document.getElementById("type").value;
    const overview = document.getElementById("overview").value;
    const requirements = document.getElementById("requirements").value;
    const work = document.getElementById("work").value;
    
    const newJob = {
      title: title,
      location: location,
      company: company,
      type: type,
      overview: overview,
      requirements: requirements,
      work: work
    };
    
    jobListings.push(newJob);
    displayJobs(jobListings);
    hideJobForm();
    showJobForm();
  }
  
    displayListings(filteredListings);
  }
  
  displayListings(jobListings);
  
  
  
  