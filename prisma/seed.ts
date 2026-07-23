import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with demo multi-tenant records...");

  // Create User
  const user = await prisma.user.upsert({
    where: { email: "demo@omniflow.ai" },
    update: {},
    create: {
      email: "demo@omniflow.ai",
      name: "John Creator",
    },
  });

  // Create Organization
  const org = await prisma.organization.upsert({
    where: { slug: "demo-agency" },
    update: {},
    create: {
      name: "Demo Agency",
      slug: "demo-agency",
      isAgency: true,
    },
  });

  // Create Workspace
  const workspace = await prisma.workspace.upsert({
    where: { slug: "demo-brand" },
    update: {},
    create: {
      organizationId: org.id,
      name: "Demo Brand Studio",
      slug: "demo-brand",
    },
  });

  // Membership
  await prisma.workspaceMember.upsert({
    where: {
      workspaceId_userId: {
        workspaceId: workspace.id,
        userId: user.id,
      },
    },
    update: {},
    create: {
      workspaceId: workspace.id,
      userId: user.id,
      role: "OWNER",
    },
  });

  // Demo Product
  await prisma.product.create({
    data: {
      workspaceId: workspace.id,
      name: "Instagram DM Automation Playbook (PDF)",
      description: "Complete guide to Instagram comment-to-DM lead generation",
      price: 499,
      currency: "INR",
      isPublished: true,
    },
  });

  console.log("Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
