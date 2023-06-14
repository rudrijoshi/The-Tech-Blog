# Tech Blog Seeding App

This is a seeding application for challenge 14, tech blog app, for the Edx full stack web development program.

## How to Use


You can either clone this repo directly into your project, which will create your seeds folder, or you can copy/paste seed.js and createSeeds.js into a seeds folder that you make yourself.

Add two scripts to the package.json

```
"create-seed": "npm i @faker-js/faker && node seeds createSeeds.js && node seeds/seed.js"

```
and

```
"seed": "node seeds/seed.js"
```

Start by updating the createSeeds.js so that the properties match your own models.

Your post content needs to be DataTypes.TEXT to hold long posts. Do the same to the comment body and control its length with the seed code.

Add date_created to both Comment and Post model so that your create dates can be randomized. If you fall back on the Sequelize timestamp createdAt, all the dates for the blog posts and comments will be the date you ran the seed program. If that's ok with you, comment out the date_created properties in createSeeds.js

In the createSeeds.js you may make any changes to the seeds that you want. If you want more users, increase the Array length, if you want different date ranges, you can adjust that as well - more paragraphs, less paragraphs, shorter/longer comments, anything you want can be changed.

Run the seed program:

```
npm run create-seed
```
This will install fakerjs, create the seeds, and thens seed the tables. 

### Heroku/Jaws

To seed on heroku please install the Heroku CLI. You can enter the bash command line like this:

```
heroku run bash -a app-name
```

Then run this script:

```
npm run seed
```
It will seed the same data as your localhost.

## Usage
You can use this program for project 2, or any other projects you need seed data for. See credits section for a link to the fakerjs api.

## Credits

FakerJS https://fakerjs.dev/api/

## Questions

Email me directly at my bootcamp spot email or Slack me if you are in my cohort.
