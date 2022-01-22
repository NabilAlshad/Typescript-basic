var role;
(function (role) {
    role[role["admin"] = 5] = "admin";
    role[role["author"] = 6] = "author";
    role[role["writer"] = 7] = "writer";
})(role || (role = {}));
console.log(role.author);
