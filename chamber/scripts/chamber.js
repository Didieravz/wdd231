const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const directoryContainer = document.getElementById("directoryContainer");

// Toggle between grid and list view
gridBtn.addEventListener("click", () => directoryContainer.className = "grid-view");
listBtn.addEventListener("click", () => directoryContainer.className = "list-view");

// Fetch and display member data
async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

function displayMembers(members) {
  directoryContainer.innerHTML = "";
  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.className = "member-card";
    memberCard.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <div class="contact-details">
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${new URL(member.website).hostname}</a></p>
      </div>
      <div class="additional-info">
        <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
        <p>${member.description}</p>
      </div>
    `;
    directoryContainer.appendChild(memberCard);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 1:
      return "Bronze";
    case 2:
      return "Silver";
    case 3:
      return "Gold";
    default:
      return "Unknown";
  }
}

// Load member data when the page loads
fetchMembers();
