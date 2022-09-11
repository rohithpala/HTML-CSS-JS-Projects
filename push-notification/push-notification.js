const notificationButton = document.querySelector('#notification-button');

notificationButton.addEventListener('click', () => {
   Notification.requestPermission()
   .then(permission => {
      if (permission === "granted") {
         const notification = new Notification("This is a Notification", {
            body: "This is the body of the notification " + Math.random(),
            data: { hello: "world" },
            icon: "./logo.png",
            
            // Unique id for notifications. Only one is created with the same tag
            tag: "notification-tag"
         });

         console.log(notification.data);

         notification.addEventListener("close", e => {
            console.log(e);
         });
      }
   });
});