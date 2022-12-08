package com.spring.masinsa.service;

import com.spring.masinsa.dto.MaskDTO;

public interface MaskService  {
	
	public MaskDTO getMask(Long maskId);
	public void deleteMask(Long maskId);
	public void updateSoldout(Long maskId, String soldout);
	public void updateClick(Long maskId);
//	public MaskDTO getMaskByKeyword(String keyword);
}
