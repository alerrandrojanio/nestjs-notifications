import { Notification } from "../entities/notification"
import { SendNotification } from "./send-notification"

const notifications: Notification[] = []

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification)
  },
}

describe("Send notification", () => {
  it("should be able to send notification", async () => {
    const sendNotification = new SendNotification(notificationRepository)

    await sendNotification.execute({
      content: "This is a notification",
      category: "social",
      recipientId: "example-recipient-id",
    })

    console.log(notifications)

    expect(notifications).toHaveLength(1)
  })
})