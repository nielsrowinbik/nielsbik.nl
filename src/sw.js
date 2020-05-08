if (
    "serviceWorker" in navigator /*&& window.location.hostname !== "localhost"*/
) {
    window.addEventListener("load", () =>
        navigator.serviceWorker.register("/sw.js").then((registration) => {
            registration.onupdatefound = () => {
                const installing = registration.installing;
                if (installing)
                    installing.onstatechange = () => {
                        if (
                            installing.state === "installed" &&
                            navigator.serviceWorker.controller
                        ) {
                            const notification = document.getElementById(
                                "notification"
                            );
                            notification.innerHTML = `👋 Hi! Click here to see the newest version of this site`;
                            notification.onclick = () =>
                                window.location.reload();
                            notification.classList.add("active");
                        }
                    };
            };
        })
    );
}
