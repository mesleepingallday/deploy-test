export async function submit(req: any) {
  console.log(req.body);

  return {
    message: "Application submitted",
    data: req.body,
  };
}
