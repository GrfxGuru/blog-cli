#!/usr/bin/env node

'use strict';
const meow = require('meow');
const blogCli = require('.');

const options = {
	flags: {
		path: {
			type: 'string',
			alias: 'p',
			default: '.'
		},
		publish: {
			type: 'boolean',
			alias: 'pub',
			default: true
		},
		editor: {
			type: 'string',
			alias: 'e',
			default: 'ia writer'
		}
	}
};

const cli = meow(
	`
	Usage
	  $ blog [slug]

	Options
		--path  ~/path/to/posts [Default: .]
		--editor 'visual studio code' [Default: 'ia writer']
		--publish [Default: true]

	Examples
		$ blog --path ~/my-blog/posts
		Saved the path \`~/my-blog/posts\` for your blog posts
		$ blog --editor 'visual studio code'
		Saved visual studio code as your editor
	  $ blog my-cool-post
		Created 2019-01-02-my-cool-post at ~/my-blog/posts
	  $ blog --publish
		Your changes have been pushed
	`,
	options
);

blogCli(cli.input[0], cli.flags);
