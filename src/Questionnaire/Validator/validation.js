import React, { Component } from 'react';

const required=(value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return true;
    }
    return false;
};
export {required};
