import { ObjectId } from "mongoose"

export class CreateCommentDto {
    name: string
    email: string
    movie_id: ObjectId
    text: string
    date: Date
}
