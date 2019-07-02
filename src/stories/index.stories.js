import { storiesOf } from '@storybook/polymer'
// import { document } from 'global'
import '../components/App.js'
  
storiesOf(`App`, module)
	.add(`app-main`, () => `<app-main></app-main>`)
	.add(`exam-element`, () => `<exam-element></exam-element>`)
    
