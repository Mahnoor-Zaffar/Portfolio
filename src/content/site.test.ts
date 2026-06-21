import { describe, it, expect } from "vitest";
import { profile, nav, projects, skills, socials } from "@/content/site";

describe("site content", () => {
  it("has core profile fields", () => {
    expect(profile.fullName).toBeTruthy();
    expect(profile.role).toBeTruthy();
    expect(profile.email).toMatch(/@/);
  });

  it("nav links all point to in-page anchors", () => {
    expect(nav.length).toBeGreaterThan(0);
    for (const link of nav) {
      expect(link.label).toBeTruthy();
      expect(link.href.startsWith("#")).toBe(true);
    }
  });

  it("every project has a name, a real description and at least one tag", () => {
    expect(projects.items.length).toBeGreaterThan(0);
    for (const p of projects.items) {
      expect(p.name).toBeTruthy();
      expect(p.description.length).toBeGreaterThan(10);
      expect(p.tags.length).toBeGreaterThan(0);
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
});
