# Inky Scribble: Web-Based Drawing Application

### Project Report

<br>
<br>
<h3>Team Members</h3>
<h5>Mohamed Safwat Hassan - 192100140</h5>
<h5>Abdallah Abdelmonem Abdelaziz - 192100154</h5>
<h5>Abdelrahman Omar Ali - 191900004</h5>
<h5>Hamed Mohamed Ragab - 191900056</h5>
<h5>Moomen Diaa Mohamed - 191800129</h5>
<h5>Ahmed Galal Abdelhay - 192200374</h5>
<br>

  

## Project Overview

  

Inky Scribble (also titled "Inky.") is a responsive, browser-based drawing application that provides users with a simple yet versatile digital canvas for creative expression. This lightweight application allows users to draw, sketch, and doodle directly in their web browser without the need for additional software installation.

  

## Project Description

  

Inky Scribble leverages HTML5 Canvas, JavaScript, and CSS to deliver a smooth drawing experience across devices. The application features an intuitive user interface with a draggable toolbox containing essential drawing tools and settings. Users can create artwork with customizable brush sizes and colors, making it suitable for quick sketches, note-taking, or more detailed illustrations.

  

## Technical Implementation

  

### Technologies Used

- **HTML5**: Structure and canvas element

- **CSS**: Styling and responsive design

- **JavaScript**: Core functionality and interactive features

  

### Core Components

1. **Canvas Implementation**: Utilizes the HTML5 Canvas API for drawing functionality

2. **Event Handling**: Mouse event listeners to capture drawing input

3. **Tool Management**: Drawing and eraser modes with adjustable settings

4. **UI Elements**: Draggable toolbox with intuitive controls

  

## Features

  

### Drawing Capabilities

- **Brush Tool**: Create lines and shapes with customizable brush size

- **Eraser Tool**: Remove parts of drawings with adjustable eraser size

- **Size Control**: Increase or decrease brush/eraser size with intuitive controls

- **Drawing Color**: Select custom drawing colors via color picker

- **Background Color**: Customize canvas background color

  

### User Interface

- **Floating Toolbox**: Movable toolbox that can be positioned anywhere on the canvas

- **Visual Indicators**: Active tool highlighting with colored borders

- **Responsive Design**: Canvas automatically adjusts to window dimensions

  

### File Management

- **Save Functionality**: Download drawings as PNG images

- **Clear Canvas**: One-click option to reset the canvas

  

### Navigation

- **About Page**: Link to an about page with additional information

  

## User Interaction Flow

  

1. **Initial Setup**:

   - Canvas loads with default brush size (5px) and color (#B43434)

   - Default background color is set to a light beige (#ffe4c4)

  

2. **Drawing Process**:

   - Left-click and drag to draw on the canvas

   - Lines are rendered smoothly between points

   - Brush renders with anti-aliasing for clean edges

  

3. **Tool Selection**:

   - Toggle between drawing and eraser modes with dedicated buttons

   - Visual feedback shows which tool is currently active

  

4. **Customization**:

   - Adjust brush/eraser size using increment/decrement buttons

   - Select drawing color with the color picker

   - Change background color with the second color picker



5. **Canvas Management**:

   - Clear the canvas to start fresh

   - Save the current drawing as a PNG file

  

6. **Toolbox Interaction**:

   - Click and drag the toolbox to reposition it

   - Toolbox remains within canvas boundaries

  

## Technical Highlights

  

### Drawing Mechanism

The drawing functionality implements:

- Point-to-point line drawing for smooth curves

- Circle rendering at mouse positions for consistent line thickness

- Composite operations for proper eraser functionality

  

### Toolbox Movement

The draggable toolbox features:

- Grab cursor indicators for drag operations

- Boundary detection to prevent moving off-canvas

- Smooth positioning with mouse coordinate tracking

  

### Color Management

Color handling includes:

- Real-time color application for drawing

- Background color updates with preview

- Proper color retention when switching between tools

  

## Future Enhancement Opportunities

  

1. **Additional Tools**:

   - Shape tools (rectangle, circle, line)

   - Text insertion capability

   - Fill bucket tool

  

2. **Advanced Features**:

   - Layers system for complex drawings

   - Undo/redo functionality

   - Zoom and pan capabilities

  

3. **User Experience Improvements**:

   - Tool shortcuts via keyboard

   - Customizable UI layout and themes

   - Touch device optimization

  

4. **Collaboration**:

   - Real-time collaborative drawing

   - Sharing options for social media

  

## Conclusion

  

Inky Scribble successfully implements a functional web-based drawing application with core features that make it useful for quick sketching and digital drawing. The project demonstrates effective use of modern web technologies to create an interactive canvas application with an intuitive user interface. The modular design allows for future expansion and enhancement as needed.

  

---

  

*This project was developed as part of an IP (Internet Programming) course, showcasing practical implementation of web technologies for interactive applications.*
