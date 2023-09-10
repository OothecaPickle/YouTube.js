import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Button from './Button.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import CommentActionButtons from './comments/CommentActionButtons.ts';
import Menu from './menus/Menu.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';

export default class BackstagePost extends YTNode {
  static type = 'BackstagePost';

  id: string;
  author: Author;
  content: Text;
  published: Text;
  poll_status?: string;
  vote_status?: string;
  vote_count?: Text;
  menu?: Menu | null;
  action_buttons?: CommentActionButtons | null;
  vote_button?: Button | null;
  surface: string;
  endpoint?: NavigationEndpoint;
  attachment;

  constructor(data: RawNode) {
    super();
    this.id = data.postId;

    this.author = new Author({
      ...data.authorText,
      navigationEndpoint: data.authorEndpoint
    }, null, data.authorThumbnail);

    this.content = new Text(data.contentText);
    this.published = new Text(data.publishedTimeText);

    if (Reflect.has(data, 'pollStatus')) {
      this.poll_status = data.pollStatus;
    }

    if (Reflect.has(data, 'voteStatus')) {
      this.vote_status = data.voteStatus;
    }

    if (Reflect.has(data, 'voteCount')) {
      this.vote_count = new Text(data.voteCount);
    }

    if (Reflect.has(data, 'actionMenu')) {
      this.menu = Parser.parseItem(data.actionMenu, Menu);
    }

    if (Reflect.has(data, 'actionButtons')) {
      this.action_buttons = Parser.parseItem(data.actionButtons, CommentActionButtons);
    }

    if (Reflect.has(data, 'voteButton')) {
      this.vote_button = Parser.parseItem(data.voteButton, Button);
    }

    if (Reflect.has(data, 'navigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }

    if (Reflect.has(data, 'backstageAttachment')) {
      this.attachment = Parser.parseItem(data.backstageAttachment);
    }

    this.surface = data.surface;
  }
}