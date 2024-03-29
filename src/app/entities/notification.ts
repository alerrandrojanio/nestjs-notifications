import { Content } from "./content"
import { Replace } from "../../helpers/Replace"
import { randomUUID } from "node:crypto"

export interface NotificationProps {
  recipientId: string
  content: Content
  category: string
  readAt?: Date | null
  createdAt: Date
}

export class Notification {
  private _id: string
  private props: NotificationProps

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id() {
    return this._id
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }

  public get recipientId(): string {
    return this.props.recipientId
  }

  public set content(content: Content) {
    this.props.content = content
  }

  public get content(): Content {
    return this.props.content
  }

  public set category(category: string) {
    this.props.category = category
  }

  public get category(): string {
    return this.props.category
  }

  public set readtAt(readAt: Date | undefined | null) {
    this.props.readAt = readAt
  }

  public get readtAt(): Date | undefined | null {
    return this.props.readAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
