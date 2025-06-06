// Contact information - Update these with your actual details
const contactInfo = {
  name: "K ANIL KUMAR",
  title: "You",
  company: "Your Company",
  phone: "+1 (123) 456-7890",
  email: "contact@yourcompany.com",
  address: {
    street: "123 Business Street",
    city: "City, State, 12345",
    country: "Country",
  },
  about:
    "Elected representative committed to public service, grassroots development, and transparent governance. Focused on uplifting communities, empowering youth, and driving sustainable progress for all.",
}

// Work/Projects data - Update with your actual projects
const workData = [
  {
    title: "Infrastructure Development",
    image: "/placeholder.svg?height=120&width=120",
    link: "https://example1.com",
    description: "Major infrastructure projects for community development",
  },
  {
    title: "Education Initiative",
    image: "/placeholder.svg?height=120&width=120",
    link: "https://example2.com",
    description: "Educational programs and school development projects",
  },
  {
    title: "Healthcare Program",
    image: "/placeholder.svg?height=120&width=120",
    link: "https://example3.com",
    description: "Healthcare facilities and medical assistance programs",
  },
  {
    title: "Youth Empowerment",
    image: "/placeholder.svg?height=120&width=120",
    link: "https://example4.com",
    description: "Youth development and skill building initiatives",
  },
]

// Initialize the page with contact information
function initializePage() {
  document.getElementById("userName").textContent = contactInfo.name
  document.getElementById("userTitle").textContent = contactInfo.title
  document.getElementById("userCompany").textContent = contactInfo.company
  document.getElementById("phoneNumber").textContent = contactInfo.phone
  document.getElementById("emailAddress").textContent = contactInfo.email
  document.getElementById("streetAddress").textContent = contactInfo.address.street
  document.getElementById("cityAddress").textContent = contactInfo.address.city
  document.getElementById("countryAddress").textContent = contactInfo.address.country
  document.getElementById("aboutDescription").textContent = contactInfo.about
}

// Phone call function
function makeCall() {
  window.location.href = 'tel:+919437063848';
}

// Email function
function sendEmail() {
  window.location.href = `mailto:${contactInfo.email}`
}

// SMS function
function sendMessage() {
  window.location.href = `sms:${contactInfo.phone}`
}

// Get directions function
function getDirections() {
  const address = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.country}`
  const encodedAddress = encodeURIComponent(address)
  window.open(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.366622842223!2d84.7830702747853!3d19.30989108194345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d51004e3de885%3A0x30b91e8f7e7217ba!2sOffice%20of%20the%20MP%20%26%20MLA%2C%20Brahmapur!5e0!3m2!1sen!2sin!4v1749199059826!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`, "_blank")
}

// Share profile function
function shareProfile() {
  if (navigator.share) {
    navigator.share({
      title: `${contactInfo.name} - ${contactInfo.title}`,
      text: `Contact ${contactInfo.name} at ${contactInfo.company}`,
      url: window.location.href,
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareText = `${contactInfo.name} - ${contactInfo.title}\n${contactInfo.company}\nPhone: ${contactInfo.phone}\nEmail: ${contactInfo.email}`
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Contact information copied to clipboard!")
    })
  }
}

// Add to contact function
function addToContact() {
  // Create vCard format
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
ADR:;;${contactInfo.address.street};${contactInfo.address.city};;;${contactInfo.address.country}
END:VCARD`

  const blob = new Blob([vCard], { type: "text/vcard" })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${contactInfo.name.replace(/\s+/g, "_")}.vcf`
  link.click()
  window.URL.revokeObjectURL(url)
}

// Show QR code modal
function showQR() {
  document.getElementById("qrModal").classList.remove("hidden")
  document.getElementById("qrModal").classList.add("flex")
}

// Close QR code modal
function closeQR() {
  document.getElementById("qrModal").classList.add("hidden")
  document.getElementById("qrModal").classList.remove("flex")
}

// Show more options
function showMore() {
  alert("More options coming soon!")
}

// View all work function
function viewAllWork() {
  alert("Redirecting to complete portfolio...")
  // You can redirect to a full portfolio page here
  // window.open("https://your-portfolio-website.com", "_blank")
}

// Close modal when clicking outside
document.getElementById("qrModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeQR()
  }
})

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePage)
