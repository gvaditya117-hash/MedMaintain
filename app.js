/* =========================================================
   HOSPITAL MAINTENANCE & PLANNING
   MAIN APPLICATION
   ========================================================= */


/* =========================================================
   APPLICATION START
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeNavigation();

    initializeMobileMenu();

    setCurrentDate();

    initializeCharts();

    initializePageLinks();

});


/* =========================================================
   NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const pageId =
                this.getAttribute("data-page");

            if (!pageId) {
                return;
            }

            showPage(pageId);

        });

    });

}


/* =========================================================
   SHOW PAGE
   ========================================================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    const navItems =
        document.querySelectorAll(".nav-item");

    let targetPage =
        document.getElementById(pageId);

    if (!targetPage) {
        return;
    }


    /* Hide all pages */

    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });


    /* Remove active navigation */

    navItems.forEach(function (item) {

        item.classList.remove("active");

    });


    /* Show requested page */

    targetPage.classList.add("active-page");


    /* Activate matching navigation */

    const matchingNav =
        document.querySelector(
            `.nav-item[data-page="${pageId}"]`
        );

    if (matchingNav) {

        matchingNav.classList.add("active");

    }


    /* Update title */

    updatePageHeader(pageId);


    /* Close mobile menu */

    closeMobileMenu();

}


/* =========================================================
   PAGE HEADER
   ========================================================= */

function updatePageHeader(pageId) {

    const titles = {

        dashboard: [
            "Dashboard",
            "Hospital maintenance overview"
        ],

        assets: [
            "Equipment & Assets",
            "Manage hospital equipment and infrastructure assets"
        ],

        maintenance: [
            "Maintenance",
            "Track and manage maintenance requests"
        ],

        schedule: [
            "Maintenance Schedule",
            "Plan upcoming maintenance activities"
        ],

        departments: [
            "Departments",
            "Monitor hospital departments and maintenance requirements"
        ],

        planning: [
            "Planning",
            "Plan resources, budgets and equipment replacement"
        ],

        alerts: [
            "Alerts",
            "Monitor critical maintenance and equipment alerts"
        ],

        reports: [
            "Reports",
            "Analyze hospital maintenance performance"
        ],

        settings: [
            "Settings",
            "Manage application preferences and local data"
        ]

    };


    const information =
        titles[pageId] || titles.dashboard;


    document.getElementById("pageTitle").textContent =
        information[0];

    document.getElementById("pageSubtitle").textContent =
        information[1];

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

    const menuButton =
        document.getElementById("menuButton");

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    menuButton.addEventListener("click", function () {

        sidebar.classList.toggle("open");

        overlay.classList.toggle("active");

    });


    overlay.addEventListener("click", function () {

        closeMobileMenu();

    });

}


function closeMobileMenu() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    sidebar.classList.remove("open");

    overlay.classList.remove("active");

}


/* =========================================================
   DATE
   ========================================================= */

function setCurrentDate() {

    const dateElement =
        document.getElementById("currentDate");


    const today = new Date();


    const options = {

        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"

    };


    dateElement.textContent =
        today.toLocaleDateString("en-IN", options);

}


/* =========================================================
   CHARTS
   ========================================================= */

let maintenanceChart = null;

let conditionChart = null;


function initializeCharts() {

    createMaintenanceChart();

    createConditionChart();

}


/* =========================================================
   MAINTENANCE CHART
   ========================================================= */

function createMaintenanceChart() {

    const canvas =
        document.getElementById("maintenanceChart");


    if (!canvas) {
        return;
    }


    const context =
        canvas.getContext("2d");


    maintenanceChart =
        new Chart(context, {

            type: "doughnut",

            data: {

                labels: [
                    "Completed",
                    "In Progress",
                    "Pending",
                    "Overdue"
                ],

                datasets: [{

                    data: [
                        34,
                        8,
                        6,
                        3
                    ],

                    borderWidth: 0

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "68%",

                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            boxWidth: 10,

                            padding: 15,

                            font: {

                                size: 10

                            }

                        }

                    }

                }

            }

        });

}


/* =========================================================
   CONDITION CHART
   ========================================================= */

function createConditionChart() {

    const canvas =
        document.getElementById("conditionChart");


    if (!canvas) {
        return;
    }


    const context =
        canvas.getContext("2d");


    conditionChart =
        new Chart(context, {

            type: "bar",

            data: {

                labels: [
                    "Excellent",
                    "Good",
                    "Needs Service",
                    "Critical"
                ],

                datasets: [{

                    label: "Assets",

                    data: [
                        28,
                        43,
                        17,
                        4
                    ],

                    borderRadius: 5,

                    borderWidth: 0

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        ticks: {

                            precision: 0,

                            font: {

                                size: 9

                            }

                        },

                        grid: {

                            color: "#edf0f2"

                        }

                    },

                    x: {

                        ticks: {

                            font: {

                                size: 9

                            }

                        },

                        grid: {

                            display: false

                        }

                    }

                }

            }

        });

}


/* =========================================================
   PAGE LINKS
   ========================================================= */

function initializePageLinks() {

    const links =
        document.querySelectorAll("[data-page-link]");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            const page =
                this.getAttribute("data-page-link");

            showPage(page);

        });

    });

}


/* =========================================================
   DEMO DASHBOARD VALUES
   ========================================================= */

function initializeDemoDashboard() {

    const values = {

        totalAssets: 92,

        operationalAssets: 78,

        maintenanceAssets: 10,

        criticalAssets: 4,

        pendingRequests: 6,

        assetAvailability: 84.8,

        maintenanceCost: 184500,

        upcomingMaintenance: 8

    };


    setText(
        "totalAssets",
        values.totalAssets
    );

    setText(
        "operationalAssets",
        values.operationalAssets
    );

    setText(
        "maintenanceAssets",
        values.maintenanceAssets
    );

    setText(
        "criticalAssets",
        values.criticalAssets
    );

    setText(
        "pendingRequests",
        values.pendingRequests
    );

    setText(
        "assetAvailability",
        values.assetAvailability + "%"
    );

    setText(
        "maintenanceCost",
        formatCurrency(values.maintenanceCost)
    );

    setText(
        "upcomingMaintenance",
        values.upcomingMaintenance
    );

}


/* =========================================================
   HELPER
   ========================================================= */

function setText(elementId, value) {

    const element =
        document.getElementById(elementId);


    if (element) {

        element.textContent = value;

    }

}


function formatCurrency(value) {

    return "₹" +
        Number(value).toLocaleString("en-IN");

}


/* =========================================================
   START DEMO DATA
   ========================================================= */

initializeDemoDashboard();