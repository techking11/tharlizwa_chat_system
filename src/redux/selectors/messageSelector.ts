import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectMessages = (state: RootState) => state.message;

export const getMessagesByConversactionId = (conersactionId: number) =>
  createSelector([selectMessages], (messages) =>
    messages.filter((message) => message.conversaction_id === conersactionId)
  );

export const getLatestMessage = (conversactionId: number) =>
  createSelector([selectMessages], (messages) => {
    const messagesById = messages.filter(
      (message) => message.conversaction_id === conversactionId
    );
    if (messages) {
      return messagesById.find(
        (message) => message.id === messagesById.length - 1
      );
    }
  });
