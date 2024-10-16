# noob.diy

[![Screenshot-from-2024-10-16-07-40-06.png](https://i.postimg.cc/JhrDGc6H/Screenshot-from-2024-10-16-07-40-06.png)](https://postimg.cc/w1rTrJd9)

[noob.diy](noob.diy) is the personal micro-blogging application. It is supposed to exist somewhere between your personal journal, your links directory (e.g. linktree, bento), wordpress, twitter and a few more applications. And all you need to do is to deploy the app, log in and start posting your thoughts.

It includes features like:
- Personal landing page with a Bento grid (similar to bento.me), which will include the following features:
  - Customizable/editable links and resources with multiple widgets (TBD)
  - Ability to connect to widgets to live health data from smartwatches (TBD)
- Basic content management system for the feed, which will include:
  - Ability to perform check-ins (similar to FourSquare) (TBD).
  - Ability to add and invite new users for writing, proof-reading, editing, etc (TBD).
  - Ability to import existing blogs from different sources (TBD).
And many more features.

| NOTE: (TBD) infront of features implies the feature is under development. As of now, most features are under-development.

# Stack

Now coming to the stack. noob.diy is built on Redwood.js & requires PostgreSQL.

These are some basic instructions for RW.js:
```
yarn install // INSTALLING PACKAGE
yarn redwood dev // STARTING THE DEVELOPMENT SERVER
yarn redwood --help // RW.JS HELP COMMAND
yarn rw prisma migrate dev // RUNNING DATABASE MIGRATION COMMAND
yarn rw storybook // STARTING THE STORYBOOK SERVER
yarn rw test // RUNNING THE TEST COMMAND
```
Follow through with this [Redwood.js](https://docs.redwoodjs.com/docs/introduction) tutorial to quickly learn it's fundamentals.
