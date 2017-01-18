//import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

//todo constants
const TODO = 'TODO'
const TOGGLE = 'TOGGLE'

//add todo actionCreator
function addTodo(text){
	return { type : TODO, text }
}

//toggle todo actionCreator
function toggleTodo(index){
	return { type : TOGGLE, index }
}

//todo reducer
function todos(state = [], action){
	switch(action.type){
		case TODO:
			return [...state, {
				text : action.text,
				completed : false
			}]
		case TOGGLE:
			return state.map((todo,index)=>{
				if(index === action.index){
					return Object.assign({}, state, {
						completed : !todo.completed
					})
				}
				return todo
			})
		default:
			return state
	}
}

let store = createStore(todos)

let unsubscribe = store.subscribe(()=>
 	console.log(store.getState())
)

store.dispatch(addTodo('keep learning'))
store.dispatch(addTodo('keep at it'))
store.dispatch(toggleTodo(1))

unsubscribe()