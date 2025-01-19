import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectMessages = (state: RootState) => state.message;

export const getMessagesByConversactionId = (conersactionId: number) =>
  createSelector([selectMessages], (messages) =>
    messages.filter((message) => message.conversaction_id === conersactionId)
  );
