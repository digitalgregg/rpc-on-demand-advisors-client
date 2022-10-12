self.addEventListener("push", (e) => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: "Notified By oda center!",
        icon: "https://oda-center.herokuapp.com/logo.png2",
    });
});
