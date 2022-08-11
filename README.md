# react-skela
React skeleton library

## Features

- **Fully Customizable components:** Feel free to change the colors, sizes, animation type.
- **Plug and play:** Use existing components or create a new one using basic react-skela (line, circle, square)
- ⚛️ **Lightweight library** with **zero dependencies**.

## Demo
## [All React Skela examples](https://reactskela.netlify.app)


## Getting Started

```sh
npm i react-skela
```

```sh
yarn add react-skela
```

## Usage

## Base skeletons
### 1. Line (Line is a default skeleton)
```jsx
import Skela from 'react-skela'
<Skela />
```
![App Screenshot](https://i.postimg.cc/RZhHStHS/line.gif)

### 2. circle
```jsx
<Skela type="circle" />
```
![App Screenshot](https://i.postimg.cc/NfpXvDLC/circle.gif)

### 3. square
```jsx
<Skela type="square" />
```
![App Screenshot](https://i.postimg.cc/q78M4BjB/square.gif)


## Inbuilt skeletons 

### Table (Default 10 rows & 1 column)
```jsx
import { SkelaTable } from 'react-skela'
<SkelaTable />
```
![App Screenshot](https://i.postimg.cc/gkJ7WMNn/table-row-only.gif)

Table with column
```jsx
import { SkelaTable } from 'react-skela'
<SkelaTable cols={4} />
```
![App Screenshot](https://i.postimg.cc/rpdZrzvc/table-row-column.gif)


### Card
```jsx
import { SkelaCard } from 'react-skela'
<SkelaCard cardWidth="200px" cardHeight="300px" />
```
![App Screenshot](https://i.postimg.cc/JzZpQSpH/card-single.gif)

### Multiple Cards
```jsx
import { SkelaCard } from 'react-skela'
<SkelaCard cardGap="10px" cradCount={4} squareWidth="250px" squareHeight="250px" />
```
![App Screenshot](https://i.postimg.cc/3RKfN9C4/card-multiple.gif)


### Bars (default 4 bars with wave animation)
```jsx
import { SkelaBar } from 'react-skela'
<SkelaBar />
```
![App Screenshot](https://i.postimg.cc/tJBKpwK4/bar-default.gif)

### Color Bars
```jsx
import { SkelaBar } from 'react-skela'
<SkelaBar color="#83d3b3" bars="8" barBaseWidth="600px" barBaseHeight="400px" />
```
![App Screenshot](https://i.postimg.cc/tJR00pmc/bar-colred.gif)

### Animation Bars pulse (default is wave)
```jsx
import { SkelaBar } from 'react-skela'
<SkelaBar animationType="pulse" bars="8" barBaseWidth="600px" barBaseHeight="400px" />
```
![App Screenshot](https://i.postimg.cc/1RMhGV81/bar-pulse-animation.gif)


## License 
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)