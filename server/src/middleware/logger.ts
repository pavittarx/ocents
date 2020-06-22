export default async function (resolve, root, args, ctx, info){
  console.log("Logger Middleware", args);

  return resolve(root, args, ctx, info);
}