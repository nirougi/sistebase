module.exports = {
  release: {
    branches: ["master"]
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: ["dist/**", "LICENSE", "README.md", "package.json"]
      }
    ]
  ]
};
