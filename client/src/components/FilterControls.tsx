import React from 'react';
import { TextField, MenuItem, Button, Select, FormControl, InputLabel, useMediaQuery, useTheme } from '@mui/material';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onResetFilters: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
  onResetFilters,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={`flex flex-wrap items-center ${isMobile ? 'justify-center' : 'justify-between'} p-4`}>
      <FormControl variant="outlined" className="m-2 min-w-40">
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as string)}
          label="Category"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Min Price"
        type="number"
        variant="outlined"
        value={priceRange.min}
        onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
        className="m-2"
      />
      <TextField
        label="Max Price"
        type="number"
        variant="outlined"
        value={priceRange.max}
        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
        className="m-2"
      />
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="m-2"
      />
      <Button onClick={onResetFilters} variant="contained" color="secondary" className="m-2">
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterControls;