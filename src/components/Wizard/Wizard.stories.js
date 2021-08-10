import React from 'react';
import ShowLinearWizard from './ShowLinearWizard'
import ShowLinearDisabledWizard from './ShowLinearDisabledWizard'
import ShowNonLinearWizard from './ShowNonLinearWizard'
import ShowNonLinearDisabledWizard from './ShowNonLinearDisabledWizard'

export default {
    title: 'Wizard',
}

export const Linear = () => 
    <ShowLinearWizard></ShowLinearWizard>

export const Linear_Disabled = () => 
    <ShowLinearDisabledWizard></ShowLinearDisabledWizard>

export const Non_Linear = () => 
    <ShowNonLinearWizard></ShowNonLinearWizard>

export const Non_Linear_Disabled = () => 
    <ShowNonLinearDisabledWizard></ShowNonLinearDisabledWizard>    