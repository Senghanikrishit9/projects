const emial = "krishitsenghani@22gmail.com";

if (emial) {
  console.log("you enter your email");
}

const x = false;

if (x) {
  console.log("this is a turthy");
} else {
  console.log("this is a flasy");
}
console.log(Boolean(x));

const children = 0;
if (children !== undefined) {
  console.log(`you have ${children} numbers of children`);
} else {
  console.log("Please enter you children ");
}

const post = ["post"];
if (post.length > 0) {
  console.log("list posts");
} else {
  console.log("No post to list");
}
