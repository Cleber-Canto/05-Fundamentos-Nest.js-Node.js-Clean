import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Optional } from 'src/core/types/optional';
import { Comment, CommentProps } from './comment';

export interface AnswerCommentProps extends CommentProps {
  answerId: UniqueEntityID;
}

export class AnswerComment extends Comment<AnswerCommentProps> {
  declare props: any;
  get answerId() {
    return this.props.answerId;
  }

  constructor(props: AnswerCommentProps, id?: UniqueEntityID) {
    super(props, id);
  }

  static create(
    props: Optional<AnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const createdAt = props.createdAt ?? new Date();
    const answerComment = new AnswerComment({ ...props, createdAt }, id);

    return answerComment;
  }
}
