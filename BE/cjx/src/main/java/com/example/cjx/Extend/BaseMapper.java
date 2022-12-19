package com.example.cjx.Extend;

import java.util.List;

/**
 * @author thuattq1
 * @date 2021-06
 */
public interface BaseMapper<D, E> {

	/**
	 * DTO2Entity
	 * 
	 * @param dto /
	 * @return /
	 */
	E toEntity(D dto);

	/**
	 * Entity2DTO
	 * 
	 * @param entity /
	 * @return /
	 */
	D toDto(E entity);

	/**
	 * DTO collection to Entity collection
	 * 
	 * @param dtoList /
	 * @return /
	 */
	List<E> toEntity(List<D> dtoList);

	/**
	 * Entity collection to DTO collection
	 * 
	 * @param entityList /
	 * @return /
	 */
	List<D> toDto(List<E> entityList);
}
