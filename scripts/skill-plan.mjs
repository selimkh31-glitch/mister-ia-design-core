#!/usr/bin/env node

const task = process.argv.slice(2).join(' ').trim().toLowerCase();

const plans = {
  redesign: [
    ['Pass 0 — Evidence', ['create-design-md', 'shape', 'critique']],
    ['Pass 1 — Art direction', ['frontend-design', 'bolder', 'typeset']],
    ['Pass 2 — Layout', ['layout', 'adapt', 'frontend-ui-engineering']],
    ['Pass 3 — Motion', ['animate', 'interaction-design', 'improve-animations']],
    ['Pass 4 — QA', ['fixing-accessibility', 'optimize', 'improve-ui']],
    ['Pass 5 — Polish', ['polish', 'audit', 'harden']]
  ],
  landing: [
    ['Direction', ['frontend-design', 'typeset']],
    ['Refinement', ['layout', 'bolder']],
    ['QA', ['improve-ui', 'better-accessibility']]
  ],
  motion: [
    ['Motion', ['animate', 'interaction-design']],
    ['Audit', ['improve-animations', 'fixing-motion-performance']]
  ],
  audit: [
    ['Audit', ['critique', 'improve-ui', 'audit']],
    ['Remediation', ['layout', 'typeset', 'better-accessibility']]
  ]
};

let mode = 'redesign';
if (task.includes('motion') || task.includes('animation')) mode = 'motion';
else if (task.includes('audit') || task.includes('review')) mode = 'audit';
else if (task.includes('landing') || task.includes('hero')) mode = 'landing';

console.log(`Mister IA Design Core — UI Skills plan (${mode})\n`);
console.log('Start routing with:');
console.log('  npx ui-skills start');
console.log('  npx ui-skills categories\n');

for (const [name, skills] of plans[mode]) {
  console.log(name);
  console.log(`  Candidate skills: ${skills.join(', ')}`);
  console.log('  Inspect the relevant category and load no more than 3 skills for this pass.\n');
}

console.log('Never treat this candidate list as authoritative. The live UI Skills catalog and project Design Bible decide the final skill selection.');
