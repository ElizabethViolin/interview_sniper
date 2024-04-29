import { useMutation, useQueryClient } from 'react-query';
import { fetchConfig } from '../lib/fetchConfig';
import { PostData, PostInput } from '../types/post';
import { Session } from '../types/session';

export function usePostMutation(session: Session) {
  const queryClient = useQueryClient(); 

  return useMutation(async (postData: PostInput) => {
    const { companyName, description, questions } = postData;
    const postBody: PostData = {
      company_name: companyName,
      description: description,
      questions: questions,
      is_bookmarked: false,
      user_reaction: null,
      id: 0,
      created_by: '',
      created_at: '',
      updated_at: ''
    };

    return await fetchConfig('posts/', session, {
      method: 'POST',
      body: JSON.stringify(postBody),
    });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
}
