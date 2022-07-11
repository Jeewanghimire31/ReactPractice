import React from 'react';
import {object, string } from "yup";

export default object({
    email: string().email().required(),
    password: string().required().min(7).max(30),
  });
