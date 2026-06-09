# Icon Library Usage Guide

## Overview

This document explains how to use the SVG icons hosted in the Icon Library repository.

The icons are designed to:

- Load directly from a CDN
- Scale without quality loss
- Work on websites, forms, dashboards, and applications
- Be recolored entirely through CSS
- Eliminate the need to create multiple color versions of the same icon

---

## CDN URL Structure

All icons are hosted through jsDelivr.

### URL Format

html https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/[icon-name].svg 

### Example

html https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/shield-check.svg 

### Example

html https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/user.svg 

---

## Basic HTML Usage

### Simple Icon

html <img   src="https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/shield-check.svg"   alt="Protected" /> 

### Icon With CSS Class

html <img   src="https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/shield-check.svg"   alt="Protected"   class="icon" /> 

css .icon {   width: 48px;   height: 48px; } 

---

## Icon Sizing

Icons can be resized entirely through CSS.

### Small

css .icon-small {   width: 24px;   height: 24px; } 

### Medium

css .icon-medium {   width: 48px;   height: 48px; } 

### Large

css .icon-large {   width: 72px;   height: 72px; } 

### Extra Large

css .icon-xl {   width: 96px;   height: 96px; } 

---

## Icon Color System

All icons are stored as black SVG files.

Because they are black, they can be recolored using CSS filters.

This allows a single icon file to be reused across multiple websites and color systems.

---

## Black Icon

No filter required.

css .icon-black {   filter: none; } 

---

## White Icon

css .icon-white {   filter: brightness(0) invert(1); } 

---

## Gold Icon

css .icon-gold {   filter:     brightness(0)     saturate(100%)     invert(74%)     sepia(53%)     saturate(611%)     hue-rotate(8deg)     brightness(96%)     contrast(88%); } 

---

## Pink Icon

css .icon-pink {   filter:     brightness(0)     saturate(100%)     invert(68%)     sepia(60%)     saturate(2484%)     hue-rotate(292deg)     brightness(98%)     contrast(92%); } 

---

## Turquoise Icon

css .icon-turquoise {   filter:     brightness(0)     saturate(100%)     invert(77%)     sepia(78%)     saturate(5030%)     hue-rotate(145deg)     brightness(94%)     contrast(86%); } 

---

## Green Icon

css .icon-green {   filter:     brightness(0)     saturate(100%)     invert(63%)     sepia(98%)     saturate(5937%)     hue-rotate(89deg)     brightness(105%)     contrast(118%); } 

---

## Applying a Color

html <img   src="https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/shield-check.svg"   alt="Protected"   class="icon icon-gold" /> 

---

## Complete Example

### HTML

html <button class="housing-btn">   <img     src="https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/shield-check.svg"     alt="Protected"     class="housing-btn-icon icon-gold"   />   <span>Protected</span> </button> 

### CSS

css .housing-btn {   display: inline-flex;   align-items: center;   gap: 28px;   padding: 28px 40px;   border: none;   border-radius: 32px;   background: #ffffff;   color: #000000;   font-size: 32px;   font-weight: 700; }  .housing-btn-icon {   width: 92px;   height: 92px; }  .icon-gold {   filter:     brightness(0)     saturate(100%)     invert(74%)     sepia(53%)     saturate(611%)     hue-rotate(8deg)     brightness(96%)     contrast(88%); } 

---

## Creating New Colors

To generate a new color:

1. Start with the original black icon.
2. Apply a CSS filter.
3. Save the filter as a reusable CSS class.
4. Reuse the same icon file with different color classes.

### Example

css .icon-custom {   filter: /* custom filter */; } 

---

## Direct CDN Reference

Repository CDN root:

text https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/ 

Single icon example:

text https://cdn.jsdelivr.net/gh/jabelaz93-byte/icon-library/shield-check.svg 