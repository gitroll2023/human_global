#!/bin/bash
npm run dev 2>&1 | grep -v "GET /api/user/context"