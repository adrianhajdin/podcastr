import { mutation } from "./_generated/server";
 
export const generateUploadUrl = mutation({
  args: {
  },
  handler: async (ctx, args) => {
    return await ctx.storage.generateUploadUrl();
  },
});