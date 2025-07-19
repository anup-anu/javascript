const clock = document.getElementById("clock");
const tzSelect = document.getElementById("timezone-select");
const themeToggle = document.getElementById("theme-toggle");

// Timezones with flags
const zones = [
  { name: "USA (New York)", tz: "America/New_York", flag: "🇺🇸" },
  { name: "UK (London)", tz: "Europe/London", flag: "🇬🇧" },
  { name: "France (Paris)", tz: "Europe/Paris", flag: "🇫🇷" },
  { name: "Japan (Tokyo)", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { name: "Australia (Sydney)", tz: "Australia/Sydney", flag: "🇦🇺" },
  { name: "UAE (Dubai)", tz: "Asia/Dubai", flag: "🇦🇪" },
  { name: "India (Mumbai)", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { name: "Russia (Moscow)", tz: "Europe/Moscow", flag: "🇷🇺" },
  { name: "China (Beijing)", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { name: "Brazil (São Paulo)", tz: "America/Sao_Paulo", flag: "🇧🇷" }
];

zones.forEach(z => {
  const o = document.createElement("option");
  o.value = z.tz;
  o.textContent = `${z.flag}  ${z.name}`;
  tzSelect.appendChild(o);
});

// Set default timezone
let selectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
tzSelect.value = selectedTz;

// Theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

// Theme toggle handler
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Timezone change handler
tzSelect.addEventListener("change", () => {
  selectedTz = tzSelect.value;
});

// Clock update
setInterval(() => {
  const now = new Date();
  clock.textContent = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    timeZone: selectedTz, hour12: false
  }).format(now);
}, 1000);
