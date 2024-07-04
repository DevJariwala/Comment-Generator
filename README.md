# LinkedIn Comment Generator Chrome Extension

### This project is a Chrome extension that generates LinkedIn comments by analyzing post content and the specified comment type. The backend is built using Spring Boot.

# Features
- __LinkedIn Post Analysis__: The extension reads LinkedIn post content.
- __Comment Generation__: Utilizes a Large Language Model (LLM) to generate appropriate comments based on the content and user-selected comment type
- __User-Friendly Interface__: Easy-to-use Chrome extension interface.

# Demo
### https://drive.google.com/file/d/11uzzKdHDanr5Bit9m1mAJscLrO6LkPNb/view?usp=sharing

## Installation

### Backend (Spring Boot)
1. Clone the repository:
   -   git clone https://github.com/DevJariwala/Comment-Generator.git
   -    cd CommentGeneratorBackend
2. mvn clean install
3. mvn spring-boot:run
4. The backend server will start at http://localhost:8080.


### Chrome Extension
1. cd CommentGeneratorExtensionUi
2. Open Chrome and navigate to chrome://extensions/.
3. Enable "Developer mode" using the toggle switch in the top-right corner.
4. Click "Load unpacked" and select the linkedin-comment-generator/extension directory.
5. The extension will now be available in your Chrome browser.


## Usage
- Navigate to LinkedIn and find a post.
- Click on the Chrome extension icon.
- Select the desired comment type from the dropdown menu.
- Click "Generate Comment" to receive a generated comment based on the post content and selected comment type.
