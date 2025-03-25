import { IconSearch, IconMapPin, IconBriefcase, IconRecharging } from '@tabler/icons-react';
const dropdownData = [
    {
        title: "Job Title",
        icon: IconSearch,
        options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specilist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support']
    },
    {
        title: "Location",
        icon: IconMapPin,
        options: ['Delhi', 'New York', 'San Fransisco', 'London', 'Pune', 'Berlin']
    },
    {
        title: "Experience",
        icon: IconBriefcase,
        options: ['Entry Level', 'Intermediate', 'Expert']
    },
    {
        title: "Job Type",
        icon: IconRecharging,
        options: ['Full Time', 'Part Time', 'Contract','Freelance']
    }
]

const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full Time",
        location: "Pune",
        package: "32 LPA",
        posted: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment"
    },
    {
        "jobTitle": "Software Engineer",
        "company": "Google",
        "applicants": 100,
        "experience": "Intermediate",
        "jobType": "Full Time",
        "location": "Bangalore",
        "package": "50 LPA",
        "posted": 7,
        "description": "Join Google as a Software Engineer and be a part of the development of cutting-edge AI technologies. We are looking for passionate engineers to create scalable solutions."
    },
    {
        "jobTitle": "Data Scientist",
        "company": "Amazon",
        "applicants": 50,
        "experience": "Expert",
        "jobType": "Contract",
        "location": "Hyderabad",
        "package": "70 LPA",
        "posted": 14,
        "description": "Amazon is looking for experienced Data Scientists to analyze large datasets and drive insights that improve business strategies. Excellent analytical and problem-solving skills required."
    },
    {
        "jobTitle": "UX Designer",
        "company": "Microsoft",
        "applicants": 30,
        "experience": "Entry Level",
        "jobType": "Part Time",
        "location": "Chennai",
        "package": "40 LPA",
        "posted": 10,
        "description": "As a UX Designer at Microsoft, you'll be involved in creating intuitive and aesthetically pleasing designs for consumer applications across multiple platforms."
    },
    {
        "jobTitle": "Web Developer",
        "company": "Tata Consultancy Services",
        "applicants": 45,
        "experience": "Intermediate",
        "jobType": "Full Time",
        "location": "Kolkata",
        "package": "28 LPA",
        "posted": 20,
        "description": "TCS is looking for Web Developers to build scalable web applications. Proficiency in HTML, CSS, and JavaScript is required."
    },
    {
        "jobTitle": "Cloud Architect",
        "company": "Adobe",
        "applicants": 60,
        "experience": "Expert",
        "jobType": "Full Time",
        "location": "Bangalore",
        "package": "90 LPA",
        "posted": 5,
        "description": "IBM is seeking an experienced Cloud Architect to design and manage cloud-based infrastructures. Strong experience with AWS and Azure is required."
    },
    {
        "jobTitle": "Product Manager",
        "company": "Adobe",
        "applicants": 40,
        "experience": "Intermediate",
        "jobType": "Contract",
        "location": "Pune",
        "package": "65 LPA",
        "posted": 3,
        "description": "Join Adobe as a Product Manager and work on innovative software solutions in digital media and marketing. You will work closely with cross-functional teams."
    },
    {
        "jobTitle": "AI Engineer",
        "company": "Netflix",
        "applicants": 80,
        "experience": "Expert",
        "jobType": "Full Time",
        "location": "Delhi",
        "package": "100 LPA",
        "posted": 2,
        "description": "Tesla is looking for AI Engineers to work on autonomous driving systems. Expertise in machine learning and deep learning is a must."
    },
    {
        "jobTitle": "Mobile App Developer",
        "company": "Apple",
        "applicants": 35,
        "experience": "Intermediate",
        "jobType": "Part Time",
        "location": "Mumbai",
        "package": "55 LPA",
        "posted": 15,
        "description": "Snapchat is looking for a Mobile App Developer to work on their Android and iOS applications. Strong skills in Kotlin, Swift, and mobile development frameworks are required."
    },
    {
        "jobTitle": "DevOps Engineer",
        "company": "Google",
        "applicants": 20,
        "experience": "Intermediate",
        "jobType": "Intern",
        "location": "Hyderabad",
        "package": "50 LPA",
        "posted": 8,
        "description": "Oracle is hiring a DevOps Engineer to enhance our cloud services infrastructure. Familiarity with containerization tools like Docker and Kubernetes is a must."
    },
    {
        "jobTitle": "Graphic Designer",
        "company": "Spotify",
        "applicants": 15,
        "experience": "Entry Level",
        "jobType": "Full Time",
        "location": "Chennai",
        "package": "30 LPA",
        "posted": 18,
        "description": "Cognizant is looking for a creative Graphic Designer to work on branding and visual communication for a range of digital products."
    },
    {
        "jobTitle": "Marketing Manager",
        "company": "HP",
        "applicants": 60,
        "experience": "Expert",
        "jobType": "Freelance",
        "location": "Bangalore",
        "package": "75 LPA",
        "posted": 6,
        "description": "Wipro is looking for a Marketing Manager to develop and execute marketing strategies for the company's products and services. Experience in digital marketing is essential."
    },
    {
        "jobTitle": "Sales Executive",
        "company": "Spotify",
        "applicants": 50,
        "experience": "Intermediate",
        "jobType": "Contract",
        "location": "Mumbai",
        "package": "40 LPA",
        "posted": 9,
        "description": "Siemens is looking for a Sales Executive to drive sales for its energy and automation division. Strong negotiation and communication skills are essential."
    },
    {
        "jobTitle": "Business Analyst",
        "company": "Apple",
        "applicants": 30,
        "experience": "Intermediate",
        "jobType": "Freelance",
        "location": "Pune",
        "package": "45 LPA",
        "posted": 16,
        "description": "Capgemini is looking for a Business Analyst to gather and analyze data to improve business processes and performance."
    },
    {
        "jobTitle": "Network Engineer",
        "company": "Meta",
        "applicants": 40,
        "experience": "Intermediate",
        "jobType": "Full Time",
        "location": "Hyderabad",
        "package": "60 LPA",
        "posted": 11,
        "description": "Cisco is looking for Network Engineers to design and optimize networking infrastructure. Familiarity with Cisco products and protocols is essential."
    },
    {
        "jobTitle": "Full Stack Developer",
        "company": "Google",
        "applicants": 70,
        "experience": "Expert",
        "jobType": "Freelance",
        "location": "Bangalore",
        "package": "80 LPA",
        "posted": 4,
        "description": "Accenture is seeking Full Stack Developers with expertise in both front-end and back-end technologies. Proficiency in JavaScript, Node.js, and React is a must."
    },
    {
        "jobTitle": "QA Engineer",
        "company": "SAP",
        "applicants": 25,
        "experience": "Intermediate",
        "jobType": "Intern",
        "location": "Noida",
        "package": "45 LPA",
        "posted": 13,
        "description": "SAP is looking for QA Engineers to ensure the quality and reliability of its software products through automated testing and validation."
    },
    {
        "jobTitle": "Technical Writer",
        "company": "Zoho",
        "applicants": 18,
        "experience": "Entry Level",
        "jobType": "Freelance",
        "location": "Chennai",
        "package": "35 LPA",
        "posted": 19,
        "description": "Zoho is looking for a Technical Writer to create user manuals, technical guides, and documentation for software products."
    },
    {
        "jobTitle": "Database Administrator",
        "company": "HP",
        "applicants": 50,
        "experience": "Expert",
        "jobType": "Full Time",
        "location": "Pune",
        "package": "85 LPA",
        "posted": 17,
        "description": "HP is seeking a Database Administrator to manage and optimize our enterprise-level databases. Extensive knowledge of SQL and database management systems is required."
    }
]

export { dropdownData,jobList };