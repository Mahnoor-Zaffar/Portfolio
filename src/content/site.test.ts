import { describe, it, expect } from "vitest";
import { profile, nav, projects, skills, socials, about } from "@/content/site";

describe("site content", () => {
  it("has core profile fields", () => {
    expect(profile.fullName).toBeTruthy();
    expect(profile.role).toBeTruthy();
    expect(profile.email).toMatch(/@/);
  });

  it("exposes a résumé download path", () => {
    expect(profile.resumeUrl).toBe("/resume.pdf");
  });

  it("nav links all point to in-page anchors and include Projects", () => {
    expect(nav.length).toBeGreaterThan(0);
    expect(nav.some((l) => l.href === "#projects")).toBe(true);
    for (const link of nav) {
      expect(link.label).toBeTruthy();
      expect(link.href.startsWith("#")).toBe(true);
    }
  });

  it("every project has a name, description, tags and thumbnail", () => {
    expect(projects.items.length).toBeGreaterThan(0);
    for (const p of projects.items) {
      expect(p.name).toBeTruthy();
      expect(p.description.length).toBeGreaterThan(10);
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.image).toMatch(/^\/images\/projects\/.+\.webp$/);
      if (p.demo) expect(p.demo).toMatch(/^https?:\/\//);
      if (p.repo) expect(p.repo).toMatch(/^https?:\/\//);
    }
  });

  it("skill groups are non-empty", () => {
    expect(skills.groups.length).toBeGreaterThan(0);
    for (const group of skills.groups) {
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it("social links are absolute or mailto URLs", () => {
    for (const social of socials) {
      expect(social.href).toMatch(/^(https?:\/\/|mailto:)/);
    }
  });

  it("about copy avoids UI library buzzwords", () => {
    const allAbout = [about.lead, ...about.paragraphs].join(" ");
    expect(allAbout.toLowerCase()).not.toContain("gsap");
  });
});
