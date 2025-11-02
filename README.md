
-----

# 🎓 Sanchi - Vidyalankar Volunteering Committee Web Platform 👩‍🎓📚

## 🌍 Overview

**Sanchi** is a comprehensive, multi-lingual web platform for the **Vidyalankar Volunteering Committee**. The project is dedicated to creating a positive social impact by encouraging students to engage in various volunteering activities across 8 key social domains.

The platform serves as a central hub for the committee's activities, providing:

  * **Public-facing pages** detailing the committee's mission, team, and social domains.
  * **A resource hub** with educational videos, audiobooks, and notes.
  * **A complete user system** with registration, login, and a personal dashboard for volunteers to manage content and notes.
  * **Full multi-language support** (English, Hindi, and Marathi) to ensure broad accessibility.

The project is built on a modern full-stack architecture with a Node.js backend to handle user data, file uploads, and media processing.

## 🌟 Key Features

  * **User Authentication**: Secure user registration (`register.html`), login (`login1.html`), and password reset (`resetPassword.html`) functionality.
  * **Multi-Language Support**: Fully dynamic content switching between **English**, **Hindi**, and **Marathi** using JavaScript and cookie-based preference storage (`language.js`).
  * **8 Social Domains**: Dedicated, content-rich pages for each of the committee's focus areas:
    1.  Girls Education (`girlseducation.html`)
    2.  Primary Education (`primaryEducation.html`)
    3.  Unprivileged Students Welfare (`UnprivilegedStudentsWellfare.html`)
    4.  Physical Health (`physicalHealth.html`)
    5.  Mental Health (`mentalHealth.html`)
    6.  Environment (`environment.html`)
    7.  Digital Literacy (`digitalLiteracy.html`)
    8.  Anti-Narcotics (`anti-narcotics.html`)
  * **Resource Hub**: A navigation dropdown (`resource.js`) linking to:
      * **Audio Books**: A collection of audiobooks with a custom player (`audio.html`, `audio.js`) that highlights text in sync with the audio.
      * **Video Library**: A grid of educational videos (`video.html`, `videogrid.css`).
      * **Notes Downloader**: A dynamic form for users to download PDF notes, filterable by class and subject (`booksDownload.html`).
  * **User Dashboard**: A personal backend for authenticated users (`dashboard.js`) that includes:
      * **Profile Management**: Form to update user details (`dashContent2.html`).
      * **Content Upload**: Forms for uploading audio (`dashContent1.css`), videos (`dashContent4.html`), and notes (`dashContent5.css`).
      * **Digital Sticky Notes**: A complete CRUD (Create, Read, Update, Delete) sticky note application (`dashContent3.js`, `dashContent3.html`) that saves notes to the user's account.
  * **Dynamic Pages**:
      * **Home Page**: Features GSAP-powered animations and an interactive domain list (`script.js`, `style.css`).
      * **About Page**: Includes team profiles and a Swiper.js slider for contributions (`about.html`, `about.js`).
      * **Gallery**: A responsive, masonry-style image gallery with a lightbox (`gallery.html`, `gallery.js`).
      * **Contact Form**: A functional contact form (`contact.html`) that supports multiple file attachments and backend email sending.
  * **Backend Services**:
      * **Video Processing**: Automatically converts uploaded videos into HLS (`.m3u8`) streams and generates thumbnails using **FFmpeg** (`processVideo.js`).
      * **File Uploads**: Handles all user-uploaded content (videos, audio, notes, thumbnails) using **Multer** (`uploadNotes.js`, `processVideo.js`).
      * **Email Service**: Sends emails for contact form submissions and password resets using **Nodemailer**, complete with a retry mechanism (`sendEmailWithRetry.js`).

-----

## 🛠️ Technology Stack

### Frontend

  * **HTML5**
  * **CSS3**: (Flexbox, Grid, Media Queries for responsiveness)
  * **JavaScript (ES6+)**: Handles all client-side interactivity, content switching, and API calls.
  * **Libraries**:
      * **GSAP (GreenSock)**: For high-performance animations (e.g., on the homepage and gallery).
      * **Swiper.js**: For touch-enabled sliders and carousels.
      * **Lenis**: For smooth scrolling.

### Backend

  * **Node.js**: Server-side JavaScript runtime.
  * **Express.js**: (Inferred) Web framework for handling routes and APIs.
  * **PostgreSQL**: (Inferred from `README.md`) SQL database for user and content data.
  * **Nodemailer**: For sending emails from the server (`sendEmailWithRetry.js`).
  * **Multer**: For handling `multipart/form-data` file uploads (`processVideo.js`, `uploadNotes.js`).
  * **FFmpeg**: (Used via `child_process`) For server-side video transcoding (HLS) and thumbnail generation (`processVideo.js`).

### Tools & Integrations

  * **Botpress**: Integrated chatbot for user support (via `inject.js` scripts).

-----

## 📁 Project Structure

The project is organized into logical folders:

```
/
├── html/
│   ├── index.html           # Home page
│   ├── about.html           # About page
│   ├── contact.html         # Contact page
│   ├── login1.html          # Login page
│   ├── register.html        # Registration page
│   ├── resetPassword.html   # Password Reset page
│   ├── gallery.html         # Image Gallery
│   ├── privacypolicy.html   # Privacy Policy
│   ├── (8 Domain Pages)...  # e.g., girlseducation.html, environment.html
│   ├── (Resource Pages)...  # e.g., audioBooks.html, video.html
│   └── (Dashboard UI)...    # e.g., dashContent2.html, dashContent3.html
│
├── css_files/
│   ├── style.css            # Global styles
│   ├── menu.css             # Navigation styles
│   ├── footer.css           # Footer styles
│   ├── language.css         # Language switcher styles
│   ├── (Page Styles)...     # e.g., about.css, contact.css, gallery.css
│   ├── (Domain Styles)...   # e.g., girlseducation.css, environment.css
│   └── (Dashboard Styles)...# e.g., dashboard.css, dashContent1.css
│
├── javascript_files/
│   ├── script.js            # Global script (GSAP animations)
│   ├── menu.js              # Mobile menu logic
│   ├── language.js          # Core multi-language content switching
│   ├── resource.js          # Resource dropdown logic
│   ├── loginStatus.js       # Toggles Login/Dashboard buttons
│   ├── (Page Scripts)...    # e.g., about.js, contact.js, gallery.js
│   ├── (Domain Scripts)...  # e.g., girlsEducation.js (for language)
│   └── (Dashboard Scripts)..# e.g., dashboard.js, dashContent3.js
│
└── custom_modules/
    ├── processVideo.js      # Backend: Multer/FFmpeg video processing
    ├── uploadNotes.js       # Backend: Multer notes uploading
    ├── sendEmailWithRetry.js  # Backend: Nodemailer email service
    └── calculateAge.js      # Backend: Helper for registration
```

-----

## 📄 HTML Pages Breakdown

  * **`index.html`**: The main landing page. Introduces the committee and features a dynamic list of the 8 domains that show an image on hover, powered by `script.js` (GSAP).
  * **`about.html`**: Describes the committee's vision, mission, and team. Uses **Swiper.js** for a contribution slider.
  * **`contact.html`**: A comprehensive contact form. `contact.js` allows users to dynamically add/remove file attachment fields. Backend logic (inferred from `sendEmailWithRetry.js`) handles the form submission.
  * **`gallery.html`**: A dual-part gallery. The first section is a full-screen GSAP-powered grid animation. The second is a responsive masonry-style gallery with a functional lightbox.
  * **`privacypolicy.html`**: A static policy page with a sticky side-navigation menu (`privacypolicy.js`) for easy navigation.
  * **Domain Pages (`girlseducation.html`, `environment.html`, etc.)**: A set of 8 template-based pages. Each features a description, a sticky sub-heading, a masonry image gallery, and a "Meet the Team" section.
  * **User Auth Pages:**
      * `login1.html` / `newlogin.html`: User login interface.
      * `register.html`: User registration form. `register.js` includes client-side logic like "Show Password".
      * `resetPassword.html`: Form for users to reset their password via email.
  * **Resource Pages:**
      * `audioBooks.html`: A grid-based layout showing available audiobooks.
      * `audio.html`: The audio player page. `audio.js` synchronizes the audio playback with the text content, highlighting words as they are spoken.
      * `video.html` & `videogrid.css`: A grid layout for displaying video resources.
      * `booksDownload.html`: A utility page for finding and downloading notes, with dropdowns for class and subject.
  * **Dashboard Pages (`dashContent*.html`):** These are HTML snippets loaded into the main dashboard page (`dashboard.html` - not provided, but inferred) by `dashboard.js`.
      * `dashContent2.html`: "Edit Profile" form.
      * `dashContent3.html`: UI for the Sticky Notes app.
      * `dashContent4.html`: "Upload Video" form.

-----

## 🎨 CSS Styling

  * **Global Styles**: `style.css` (main layout), `menu.css` (desktop/mobile nav), `footer.css` (site-wide footer), and `language.css` (language switcher) define the core look and feel.
  * **Page-Specific**: Each HTML page generally has its own dedicated stylesheet (e.g., `about.css`, `gallery.css`) to keep styles encapsulated.
  * **Domain Styles**: All 8 domain pages (`girlseducation.css`, `environment.css`, etc.) share a common structure, including a sticky navigation element (`domain-sub-heading-sticky`) and a masonry image grid.
  * **Responsiveness**: Media queries (`@media (max-width: ...px)`) are used extensively (e.g., in `about.css`, `contact.css`, `style.css`) to ensure the site is mobile-friendly.
  * **Fonts**: Imports various Google Fonts, including **Poppins**, **Hind**, and **Tiro Devanagari Marathi**, to support its multi-language feature.

-----

## ⚙️ JavaScript Functionality

### Core Client-Side Logic

  * **`language.js` (and variants)**: This is the most critical client-side feature. Present in almost every page-specific JS file, it holds a `content` object with `english`, `hindi`, and `marathi` keys. The `updateLanguage` function reads a language preference from a cookie and dynamically replaces the `innerHTML` of all elements with an `id` matching a key in the content object.
  * **`menu.js`**: Toggles the visibility of the mobile navigation menu (`#nav-part3`).
  * **`resource.js`**: Manages the show/hide functionality of the "Resources" dropdown menu (`#nav-resources-sub-options`).
  * **`loginStatus.js`**: Checks if a user is authenticated (logic not shown, but `statusCode` variable) and toggles the visibility of the "Dashboard" and "Login" buttons in the navigation bar.
  * **`lenis.js`**: Implements a smooth scrolling effect across the site.

### Page-Specific Scripts

  * **`script.js` (Home Page)**:
      * Initializes GSAP for animations.
      * Creates the hover effect on the "Our Domains" list (`#elem-container`), which displays a corresponding image in a fixed div (`#fixed-image`).
      * Initializes the Swiper.js slider for the "Brand Sponsors" section.
  * **`gallery.js`**:
      * Uses GSAP and ScrollTrigger to create parallax and scroll-based animations on the main grid.
      * Initializes the masonry gallery and adds a click-to-enlarge lightbox feature.
  * **`about.js`**: Initializes the Swiper.js slider for the "Our Contributions" gallery.
  * **`contact.js`**: Contains logic to dynamically add more file input fields to the contact form when the "Add More Attachment" button is clicked.
  * **`register.js`**: Includes a "Show Password" toggle.
  * **`audio.js`**: Powers the audio player. It contains a `syncData` array mapping text to timestamps. An event listener on the audio player's `timeupdate` event adds an `.active` class to the corresponding span of text, highlighting it as it's spoken.
  * **`privacypolicy.js`**: Implements smooth scrolling for the sticky side navigation links.

### Dashboard & Backend Logic

  * **`dashboard.js`**:
      * Acts as the main controller for the user dashboard.
      * The `updateDashboradContent` function implements tabbed navigation by showing/hiding different HTML panels.
      * Handles the `logoutProcedure`.
  * **`dashContent3.js` (Sticky Notes App)**:
      * Fetches existing notes from the backend (`/user/db_notes`).
      * Handles creating, updating, and deleting notes.
      * Sends note data (content, color, ID) back to the server (`/user/notes` and `/user/deleteNote`) via `fetch` POST requests.
  * **`custom_modules/processVideo.js` (Backend)**:
      * Configures **Multer** disk storage to save videos and thumbnails in organized folders named after the video title.
      * Uses `child_process.exec` to run **FFmpeg** commands to:
        1.  Segment the video into an HLS stream (`.m3u8` playlist and `.ts` files) for adaptive streaming.
        2.  Extract preview images (thumbnails) from the video every 10 seconds.
  * **`custom_modules/uploadNotes.js` (Backend)**:
      * Configures **Multer** to save uploaded note files (PDFs) into a structured directory: `/public/files/uploads/digi_notes/[category]/[class]`.
  * **`custom_modules/sendEmailWithRetry.js` (Backend)**:
      * A robust wrapper around **Nodemailer**. It provides a `sendEmailWithRetry` function that will attempt to send an email up to 3 times with exponential backoff if it fails, ensuring reliability.
  * **`custom_modules/calculateAge.js` (Backend)**:
      * A simple date utility function to calculate a user's age from their date of birth string, likely used during registration.