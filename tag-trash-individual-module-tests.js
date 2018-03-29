// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tag-trash-individual-module.js.
import { name as packageName } from "meteor/tag-trash-individual-module";

// Write your tests here!
// Here is an example.
Tinytest.add('tag-trash-individual-module - example', function (test) {
  test.equal(packageName, "tag-trash-individual-module");
});
