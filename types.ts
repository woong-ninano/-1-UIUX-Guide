
import React from 'react';

export type MenuSection = 
  | 'General'     // 0. 공통 규칙 (Color, Font)
  | 'Layout'      // 1. 레이아웃 (Grid, Header, Footer)
  | 'Text'        // 2. 텍스트 (Title, Body, List)
  | 'Input'       // 3. 입력 (Input, Textarea)
  | 'Selection'   // 4. 선택 (Radio, Checkbox, Switch)
  | 'Action'      // 5. 액션 (Button, Link)
  | 'Display'     // 6. 데이터 표현 (Card, Table, Badge)
  | 'Feedback';   // 7. 피드백 (Modal, Toast)

export interface ComponentDoc {
  title: string;
  description: string;
  component: React.ReactNode;
  notes?: string[];
}
