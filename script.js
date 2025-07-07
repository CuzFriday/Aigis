// Function to scroll to a specific section
function scrollToSection(index) {
  const scrollContainer = document.getElementById("scrollContainer");
  const sectionWidth = scrollContainer.scrollWidth / 6; // 6 sections

  scrollContainer.scrollTo({
    left: sectionWidth * index,
    behavior: "smooth",
  });
}
