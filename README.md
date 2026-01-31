
# IT3040 – ITPM Assignment 1: Functional Testing & Test Automation

## Project Overview

This repository contains automated functional test cases for **Singlish-to-Sinhala** (or Thanglish-to-Tamil) transliteration systems using **Playwright**. The project evaluates translation accuracy, UI stability, and system robustness across 34+ test scenarios.

## Course Information

- **Course**: IT3040 – Information Technology Project Management
- **Program**: BSc (Hons) in Information Technology, Year 3, Semester 1
- **Assessment**: Assignment 1 – Functional Testing & Automation
- **Registration Number**: IT23286078

## Project Structure

```
IT23286078/
├── playwright/
│   ├── tests/
│   │   ├── positive_functional_tests.spec.js
│   │   ├── negative_functional_tests.spec.js
│   │   └── ui_tests.spec.js
│   ├── playwright.config.js
│   ├── package.json
│   └── README.md
├── IT23286078_TestCases.xlsx
├── git_repository_link.txt
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Install Dependencies

```bash
cd playwright
npm install
```

### Run Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test tests/positive_functional_tests.spec.js

# Run tests in headed mode (see browser)
npm test -- --headed
```

## Test Coverage

### Test Scenarios: 34 Total
- **Positive Functional Tests**: 24 scenarios
- **Negative Functional Tests**: 10 scenarios
- **UI Tests**: 1 scenario

### Categories Covered
✓ Sentence structures (simple, compound, complex)  
✓ Interrogative & imperative forms  
✓ Positive & negative sentence forms  
✓ Daily language usage & greetings  
✓ Word combinations & phrase patterns  
✓ Joined vs segmented word variations  
✓ Tense variations (past, present, future)  
✓ Mixed language content (Singlish + English)  
✓ Punctuation, numbers, and formatting  
✓ Input length variations (S, M, L)  
✓ Real-time UI output updates  

## Deliverables

1. **Playwright Project Repository** – Fully functional, publicly accessible Git repository
2. **Test Cases Excel File** – `IT23286078_TestCases.xlsx` with test case template per Appendix 2
3. **Documentation** – Clear setup and execution instructions

## Key Notes

- No backend API, performance, or security testing included
- Test cases follow naming conventions: `Pos_Fun`, `Neg_Fun`, `Pos_UI`, `Neg_UI`
- Excel file checked for plagiarism (similarity threshold: ≤10%)

## Submission

- Renamed files: `IT23286078_*`
- Zipped folder: `IT23286078.zip`
- Submitted to CourseWeb before: **1st February**
